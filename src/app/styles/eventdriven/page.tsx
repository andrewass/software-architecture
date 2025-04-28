import EventDrivenConcepts from "@/app/styles/eventdriven/EventDrivenConcepts";
import EventDrivenOverview from "@/app/styles/eventdriven/EventDrivenOverview";
import EventDrivenApplications from "@/app/styles/eventdriven/EventDrivenApplications";
import EventDrivenModel from "@/app/styles/eventdriven/model/EventDrivenModel";

export default function EventDrivenPage() {
  return (
    <div className="flex flex-col gap-10">
      <h2>Event-Driven Architecture</h2>
      <EventDrivenOverview />
      <EventDrivenModel />
      <EventDrivenConcepts />
      <EventDrivenApplications />
    </div>
  );
}
