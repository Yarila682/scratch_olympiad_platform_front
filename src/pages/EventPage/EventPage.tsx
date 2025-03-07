import EventsPageModule from "@/modules/EventPage";
import { useParams } from "react-router-dom";

function EventPage() {
    const { id } = useParams()
    return (
        <EventsPageModule id={id || '0'} />
    );
}

export default EventPage