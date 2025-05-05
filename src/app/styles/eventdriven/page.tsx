import EventDrivenConcepts from "@/app/styles/eventdriven/EventDrivenConcepts";
import EventDrivenOverview from "@/app/styles/eventdriven/EventDrivenOverview";
import EventDrivenApplications from "@/app/styles/eventdriven/EventDrivenUseCases";
import EventDrivenModel from "@/app/styles/eventdriven/model/EventDrivenModel";

export default function EventDrivenPage() {
  return (
    <div className="flex flex-col gap-10">
      <h5 className="text-xl font-bold">Event-Driven Architecture</h5>
      <EventDrivenOverview />
      <EventDrivenModel />
      <EventDrivenConcepts />
      <EventDrivenApplications />
    </div>
  );
}
