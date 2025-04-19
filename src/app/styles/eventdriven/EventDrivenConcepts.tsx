export default function EventDrivenConcepts() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <p>
        <span className="font-extrabold">Events: </span>
        Events are lightweight, immutable records capturing occurrences like
        user actions or system changes. They include metadata (e.g., timestamp,
        type, source) and a payload describing the event’s context. Events are
        the fundamental units of communication, enabling systems to react
        dynamically to changes in real-time or asynchronously.
      </p>
      <p>
        <span className="font-extrabold">Event Producers: </span>
        Producers are services or applications that generate events when
        specific actions occur, such as a user placing an order. They create and
        publish events to an event broker, including relevant data and metadata.
        Producers operate independently, unaware of consumers, ensuring loose
        coupling in the system.
      </p>
      <p>
        <span className="font-extrabold">Event Consumers: </span>
        Consumers are services or applications that subscribe to specific event
        types from an event broker. They process events to perform tasks like
        updating databases or sending notifications. Consumers operate
        independently, reacting to events in real-time or at their own pace,
        enhancing system scalability and flexibility.
      </p>
      <p>
        <span className="font-extrabold">Event Broker: </span>
        The event broker is middleware (e.g., Kafka, RabbitMQ) that manages
        event distribution. It receives events from producers, stores or routes
        them, and delivers them to subscribed consumers. Brokers ensure
        reliable, scalable, and asynchronous communication, supporting patterns
        like publish/subscribe or message queues in distributed systems.
      </p>
    </div>
  );
}
