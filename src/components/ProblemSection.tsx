import React from 'react';

export function ProblemSection(): React.ReactElement {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 text-center max-w-3xl mx-auto">
          Property built every generation's wealth. Except yours.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Stat Card 1 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-4">
              £54k
            </div>
            <p className="text-gray-700 text-lg">
              The average first-time buyer deposit. That's 1.6× the average salary before you've bought a single brick.
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-4">
              6 mo
            </div>
            <p className="text-gray-700 text-lg">
              The average time to sell a property. Your money goes in fast and comes out slow.
            </p>
          </div>

          {/* Stat Card 3 */}
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-black mb-4">
              35%
            </div>
            <p className="text-gray-700 text-lg">
              Of millennials believe they'll never own property at all.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center border-t border-gray-200 pt-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            The asset class that made your parents wealthy is locked behind capital, paperwork, and time most people don't have. It's not that property stopped working. It's that the door closed.
          </p>
        </div>
      </div>
    </section>
  );
}
