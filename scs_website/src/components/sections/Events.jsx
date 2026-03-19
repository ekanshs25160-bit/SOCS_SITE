import React from 'react';
import Card from '../ui/Card';

const EventsSection = () => {
    return (
      <section className="events-grid py-20 px-[10%] bg-[#0b111a]">
        <h2 className="text-5xl font-black mb-12 gradient-text">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card 
                title="Hackathon 2026" 
                description="Join us for 48 hours of intense coding and innovation."
                tech={["Coding", "Prizes", "Networking"]}
            />
            <Card 
                title="SCS Symposium" 
                description="Expert talks on AI, Cybersecurity and Future of Web."
                tech={["Talks", "Workshops"]}
            />
        </div>
      </section>
    );
};

export default EventsSection;
