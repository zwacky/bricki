import classNames from "classnames";
import React from "react";

interface Props {
  items: { header: string; text: string; time: string; icon: any }[];
}
const Timeline: React.FC<Props> = ({ items }) => {
  return (
    <>
      <div
        className="absolute border-l border-opacity-20 border-gray-700"
        style={{ left: "50%", height: 'calc(100% - 44rem)' }}
      ></div>

      {items.map(({ time, icon, header, text }, index) => (
        <div
          key={time}
          className={classNames(
            " flex justify-between items-center w-full",
						(index === items.length - 1) ? 'mb-0' : 'mb-16',
            index % 2 === 1 ? "flex-row-reverse text-right" : ""
          )}
        >
          <div className="order-1"></div>
          <div className="relative z-10 order-1 border bg-gray-50 rounded-lg shadow-sm w-full md:w-7/12 px-6 py-4 ">
            <div
              className={classNames(
                "flex content-between items-center",
                index % 2 === 1 ? "flex-row-reverse" : ""
              )}
            >
              <div className="shrink-0 justify-center">
                {icon && (
                  <div
                    className={classNames(
                      "relative h-20 w-20 rounded-full bg-orange-400 text-white ",
                      index % 2 === 1 ? "ml-5" : "mr-5"
                    )}
                  >
                    <div className="absolute flex justify-center items-center w-full h-full text-center whitespace-nowrap text-2xl">
                      {icon}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <div className="text-sm text-gray-500sdf">{time} Uhr</div>
                <h3 className="mb-3 font-bold text-gray-800 text-2xl">
                  {header}
                </h3>
                <p className="">{text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
