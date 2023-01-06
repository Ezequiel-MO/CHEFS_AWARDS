interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({ setModalOpen }: ModalProps) => {
  return (
    <>
      <div
        onClick={() => setModalOpen(false)}
        className='fixed top-0 left-0 right-0 w-full h-full dismiss z-[150] flex-col bg-[#000] bg-opacity-50 justify-center items-center'
      >
        <span
          className='absolute cursor-pointer top-[30px] right-[80px] text-2xl font-bold z-[300]'
          onClick={() => setModalOpen(false)}
        >
          X
        </span>
        <div className='absolute top-[20px] right-[50px] left-[50px] bottom-[20px] bg-med_white p-5 rounded-lg overflow-y-auto no-scrollbar cursor-grab'>
          <div className='px-5 py-2'>
            <p className='text-lg font-bold text-center my-5'>
              The story behind CUTT/Events
            </p>
            <p className='indent-5'>
              <strong>CUTT/Events </strong>
              was born as <strong>CUTTING EDGE EVENTS</strong> in Valencia in
              2008, after the{' '}
              <strong className='italic'>America's Cup in Valencia</strong>, by
              two entrepreneurs: <strong>Montse Miranda</strong> and{' '}
              <strong>Oliver Martinez</strong>.
            </p>
            <p className='indent-5'>
              Montse and Oliver had been working together since 2002 in one of
              the biggest DMCs in Spain. They brought to the company their
              experience in the local market and in big events (such as
              America's Cup, F1, and Standalone congress with Johnson & Johnson
              for example) as well as the care and attention to the client,
              totally personalized in each project. This was the approach we
              needed to be different from other DMCs: everything at{' '}
              <strong>CUTT/Events </strong> is done "A la carte".
            </p>
            <p className='indent-5'>
              Our project is strong and has survived despite the adversities: we
              are still in the market after the economic crisis of 2009-2010 and
              the COVID pandemic.
            </p>
            <p className='text-lg font-bold text-center my-3'>
              CUTT/Events & SEE Network Projects
            </p>
            <p className='indent-5'>
              A long collaboration has been going on for many years between
              CUTT/events and SEE Network. Whenever we have large or special
              project in view, we both like to work together since we complement
              each other to perfection.
            </p>
            <p className='indent-5'>
              <strong>SEE Network</strong> is specialised in car launches and
              large scale projects, with a similar approach.{' '}
              <strong>CUTT/Events </strong> has expertise in customer service
              and group operationswith more than 20 years of experience in the
              industry... <strong>SEE Network</strong> is a subsidiary of Joke
              Events Gmhb , and brings the multilingual team and marketing
              experience to the table. Being the subsidiary in Spain of a large
              company with a presence in Europe and the United States gives us
              the opportunity to work with the best suppliers in the industry.
              The most recent projects we worked on together are the following:
            </p>

            <ol className='my-3'>
              <li>European media Launch KIA EV6 - October 2021 </li>
              <li>BMW - The 2 Car Launch - January 2022 </li>
              <li>Linde Incentive - May 2022 </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
