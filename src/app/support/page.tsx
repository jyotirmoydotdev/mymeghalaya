import React from 'react';

const page: React.FC = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Contact Support</h1>
      <p className="text-lg mb-4">
        If you have any questions, concerns, or feedback, please feel free to reach out. Here are some reasons you might want to contact us:
      </p>

      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <strong>Incorrect Information:</strong> Let us know if you come across any inaccuracies, and we&apos;ll be happy to correct them.
        </li>
        <li>
          <strong>General Inquiries:</strong> Have a question about something? Were here to help!
        </li>
        <li>
          <strong>Suggest New Information:</strong> If you have details you&apos;d like us to add, we&apos;d love to hear about them.
        </li>
        <li>
          <strong>Other Queries:</strong> Feel free to reach out with any other questions you may have.
        </li>
      </ul>

      <p className="text-lg">Contact us via email at:</p>
      <a href="mailto:care.jyotirmoy@gmail.com" className="text-blue-600 underline">
        care.jyotirmoy@gmail.com
      </a>
    </div>
  );
};

export default page;
