import { connect } from "amqplib";
import Bluebird = require("bluebird");

export const setupQueues = async () => {
  const exchangeExternalOpts = {
    internal: false,
    durable: true
  };
  const exchangeInternalOpts = {
    internal: false,
    durable: true
  };
  connect("amqp://localhost:5679/")
    .then(conn => conn.createChannel())
    .then(channel => {
      Bluebird.resolve()
        .then(() => channel.assertExchange("ins.main", "headers", exchangeExternalOpts))

        .then(() => channel.assertExchange("ins.algo", "x-consistent-hash", exchangeInternalOpts))
        .then(() => channel.assertExchange("ins.auth", "x-consistent-hash", exchangeInternalOpts))
        .then(() => channel.assertExchange("ins.interaction", "x-consistent-hash", exchangeInternalOpts))
        .then(() => channel.assertExchange("ins.payment", "x-consistent-hash", exchangeInternalOpts))

        .then(() => channel.bindExchange("ins.algo", "ins.main", "*", { "x-match": "all", ms: "algo" }))
        .then(() => channel.bindExchange("ins.auth", "ins.main", "*", { "x-match": "all", ms: "auth" }))
        .then(() => channel.bindExchange("ins.interaction", "ins.main", "*", { "x-match": "all", ms: "interaction" }))
        .then(() => channel.bindExchange("ins.payment", "ins.main", "*", { "x-match": "all", ms: "payment" }))

        .then(() => channel.assertQueue("ins.algo.q1", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.algo.q2", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.algo.q3", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.algo.q4", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.algo.q5", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.bindQueue("ins.algo.q1", "ins.algo", "1"))
        .then(() => channel.bindQueue("ins.algo.q2", "ins.algo", "2"))
        .then(() => channel.bindQueue("ins.algo.q3", "ins.algo", "3"))
        .then(() => channel.bindQueue("ins.algo.q4", "ins.algo", "4"))
        .then(() => channel.bindQueue("ins.algo.q5", "ins.algo", "5"))

        .then(() => channel.assertQueue("ins.auth.q1", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.auth.q2", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.auth.q3", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.auth.q4", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.auth.q5", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.bindQueue("ins.auth.q1", "ins.auth", "1"))
        .then(() => channel.bindQueue("ins.auth.q2", "ins.auth", "2"))
        .then(() => channel.bindQueue("ins.auth.q3", "ins.auth", "3"))
        .then(() => channel.bindQueue("ins.auth.q4", "ins.auth", "4"))
        .then(() => channel.bindQueue("ins.auth.q5", "ins.auth", "5"))

        .then(() => channel.assertQueue("ins.payment.q1", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.payment.q2", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.payment.q3", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.payment.q4", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.payment.q5", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.bindQueue("ins.payment.q1", "ins.payment", "1"))
        .then(() => channel.bindQueue("ins.payment.q2", "ins.payment", "2"))
        .then(() => channel.bindQueue("ins.payment.q3", "ins.payment", "3"))
        .then(() => channel.bindQueue("ins.payment.q4", "ins.payment", "4"))
        .then(() => channel.bindQueue("ins.payment.q5", "ins.payment", "5"))

        .then(() => channel.assertQueue("ins.interaction.q1", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.interaction.q2", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.interaction.q3", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.interaction.q4", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.assertQueue("ins.interaction.q5", { durable: true, arguments: { "x-single-active-consumer": true } }))
        .then(() => channel.bindQueue("ins.interaction.q1", "ins.interaction", "1"))
        .then(() => channel.bindQueue("ins.interaction.q2", "ins.interaction", "2"))
        .then(() => channel.bindQueue("ins.interaction.q3", "ins.interaction", "3"))
        .then(() => channel.bindQueue("ins.interaction.q4", "ins.interaction", "4"))
        .then(() => channel.bindQueue("ins.interaction.q5", "ins.interaction", "5"));
    });
};
