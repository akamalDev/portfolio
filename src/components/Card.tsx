export default function Card({ title, description }: { title: string; description: string }) {
    return (
      <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-neutral-900 text-black dark:text-white transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50 dark:hover:border-gray-600">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    );
  }
  