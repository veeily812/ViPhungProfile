import Image from 'next/image';

export default function PowerBISection() {
  return (
    <section id="power-bi" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Power BI Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Adidas Performance Track</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/Adidas.png"
                alt="Adidas Performance Track"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              A comprehensive financial dashboard template that includes key performance indicators,
              revenue analysis, expense tracking, and financial forecasting.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sales Analytics Template</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/Amazon2.png"
                alt="Amazon's Customer Profile "
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              An interactive sales analytics dashboard featuring sales trends, regional performance,
              product analysis, and customer insights.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">HR Analytics Dashboard</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/EV.png"
                alt="Global EV Overview"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              A comprehensive HR dashboard tracking employee metrics, recruitment analytics,
              performance indicators, and workforce demographics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Indian Woman Fashion Price, Bundle Exploration</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/Indian_Woman_Fashion.png"
                alt="Indian Woman Fashion Price, Bundle Exploration"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Track marketing campaign performance, ROI metrics, channel effectiveness,
              and customer engagement analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Green Fashion Trend</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/Green_fashion.png"
                alt="Green Fashion Trend"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Monitor inventory levels, supplier performance, logistics metrics,
              and supply chain efficiency indicators.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Clustering Analytics</h3>
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src="power-bi/Green_fashion1.png"
                alt="Clustering Analytics"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600">
              Analyze customer satisfaction metrics, support ticket resolution times,
              service quality indicators, and customer feedback trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 