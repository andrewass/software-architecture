export default function EventDrivenOverview() {
  return (
    <div className="flex flex-col gap-5">
      <p>
        Event-driven architecture (EDA) is a design paradigm where systems react
        to events—distinct occurrences such as user interactions, sensor data,
        or system messages. Unlike traditional request-response models, EDA
        promotes loose coupling by enabling asynchronous communication, which
        enhances scalability and resilience. In EDA, producers create events,
        which are lightweight, immutable records containing metadata like
        timestamps or event types. These events are sent to an event broker,
        such as Apache Kafka, RabbitMQ, or AWS SNS, which acts as a middleware
        to route them efficiently. Consumers, subscribed to specific event
        types, process these events independently, often in real-time, allowing
        for parallel workflows.
      </p>
      <p>
        This decoupling allows components to operate without direct
        dependencies, making systems more flexible and easier to scale. For
        instance, in an e-commerce platform, an order placement event can
        trigger inventory updates, payment processing, and customer
        notifications concurrently. EDA is widely used in microservices, IoT,
        and real-time analytics due to its ability to handle high event volumes.
        However, it introduces complexities like managing event schemas,
        ensuring reliable delivery, and handling out-of-order events. Debugging
        asynchronous flows can also be challenging. Despite these hurdles, EDA’s
        ability to support dynamic, distributed systems makes it a powerful
        choice for modern applications.
      </p>
    </div>
  );
}
