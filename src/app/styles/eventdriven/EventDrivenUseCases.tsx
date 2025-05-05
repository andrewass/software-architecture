export default function EventDrivenUseCases() {
  return (
    <div>
      <h5>Use Cases</h5>
      <div className="grid grid-cols-2 gap-6">
        <p>
          <span className="font-extrabold">Real-time Data Processing: </span>
          In fast-paced environments like stock trading platforms, data changes
          rapidly—stock prices can shift within seconds. EDA enables immediate
          reactions to these events, such as triggering buy or sell orders when
          a stock hits a target price. This minimizes latency and ensures timely
          decision-making, which is critical in financial systems where delays
          can lead to missed opportunities or losses. By processing events as
          they occur, EDA supports the high-speed, responsive nature of
          real-time data applications, making it an ideal fit for such use
          cases.
        </p>
        <p>
          <span className="font-extrabold">
            Internet of Things (IoT) Applications:{" "}
          </span>
          IoT systems involve countless devices—sensors, smart appliances,
          etc.—constantly generating data like temperature shifts or motion
          alerts. EDA shines here by processing these events in real-time as
          they’re emitted. This allows the system to scale efficiently, handling
          massive data influxes from billions of devices without bottlenecks.
          For example, a smart home system can instantly adjust heating when a
          sensor detects a temperature drop. EDA’s ability to manage
          asynchronous event streams ensures robust performance, making it a
          powerful choice for the dynamic, distributed nature of IoT ecosystems.
        </p>
        <p>
          <span className="font-extrabold">
            User Interface (UI) Responsiveness:{" "}
          </span>
          Modern web and mobile applications rely on seamless user experiences,
          where interactions like button clicks or form submissions need instant
          feedback. EDA enhances UI responsiveness by treating these actions as
          events, enabling real-time updates without page refreshes. In a chat
          app, for instance, new messages appear instantly as they’re sent,
          keeping the interface lively and interactive. This event-driven
          approach ensures that applications remain dynamic and user-friendly,
          meeting the expectations of today’s users for fast, fluid digital
          experiences across platforms.
        </p>
        <p>
          <span className="font-extrabold">Microservices Communication: </span>
          In a microservices architecture, independent services must communicate
          without being tightly coupled. EDA facilitates this by allowing
          services to publish events—like an order being placed—and letting
          other services subscribe to react, such as updating inventory. This
          decoupling improves modularity and scalability, as new services can be
          added without altering existing ones. For example, an e-commerce
          platform can process payments and notify shipping services
          asynchronously via events. EDA’s loose coupling and event-based
          coordination make it a natural fit for the distributed, flexible
          nature of microservices systems.
        </p>
      </div>
    </div>
  );
}
