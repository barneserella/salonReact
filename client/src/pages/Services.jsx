import React from 'react';


const services = [
    'Haircut',
    'Hair Coloring',
    'Deep Conditioning',
    "Bridal Styling",
    'Event Styling'
];

const haircuts = [
    'Women’s Haircut & Style: $50',
    'Men’s Haircut & Style: $35',
    'Children’s Haircut (Under 12): $25',
    'Blowout: $30',
];

const color = [
    'Single Process Color: $70',
    'Highlights: $90',
    'Balayage: $120',
    'Color Correction: Consultation Required',
];

const treatments = [
    'Deep Conditioning Treatment: $25',
    'Keratin Treatment: $150',
    'Scalp Treatment: $35',
];

const specialtyServices = [
    'Bridal Hair: $100',
    'Updos & Special Occasion Styles: $75',
    'Extensions: Consultation Required',
];

const Services = () => {
    

  return (
    <div>
        <h1>Services</h1>
        <h2>Transform Your Look with Our Premium Services</h2>
        <h2>Cut & Style</h2>

        {haircuts.map((service, index)=> (
                        <li key={index} value={service}>{service}</li>
                    ))}

        <h2>Color</h2>

        {color.map((service, index)=> (
                        <li key={index} value={service}>{service}</li>
                    ))}                

        <h2>Treatments</h2>

        {treatments.map((service, index)=> (
                        <li key={index} value={service}>{service}</li>
                    ))}

        <h2>Specialty Services</h2>

        {specialtyServices.map((service, index)=> (
                        <li key={index} value={service}>{service}</li>
                    ))}

    </div>
  )
}

export default Services;