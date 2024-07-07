'use client';

import { useState } from 'react';

import Button from './Button';
import Heading from '../Typography/Heading';

const ContactOverlay: React.FC<MT.CallbackProps> = ({
  callback,
}): JSX.Element => {
  const [copied, setCopied] = useState(false);

  const copyHandler = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL as string);
    setCopied(true);
    setTimeout(() => {
      callback();
    }, 2000);
  };

  const openClientHandler = () => {
    window.open(`mailto:${process.env.NEXT_PUBLIC_EMAIL}`, '_blank');
    callback();
  };

  return (
    <div className="backdrop-blur-sm absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="max-w-full w-[700px] py-32 px-24 mx-4 bg-black rounded-lg relative border-2 border-green">
        {copied ? (
          <Heading
            level="h3"
            fontStyle='font-sans'
            text="My email has been copied to your clipboard. Talk to you soon!"
            color="text-green"
          />
        ) : (
          <>
            <Heading level="h2" text="Contact Me" color="text-green" />
            <Heading
              level="h3"
              text="How would you like to get in touch?"
              color="text-green"
              fontStyle="font-sans"
            />
            <div className="mx-auto md:flex mt-8">
              <div className="mb-8 md:mr-8 md:mb-0">
                <Button
                  theme="outline"
                  title="Copy my email"
                  onClick={copyHandler}
                />
              </div>
              <div>
                <Button
                  onClick={openClientHandler}
                  theme="solid"
                  title="Open mail client"
                />
              </div>
            </div>
          </>
        )}
        <button
          className="text-green text-md absolute top-8 right-16 font-sans"
          onClick={callback}
          title="Close Popup"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default ContactOverlay;
