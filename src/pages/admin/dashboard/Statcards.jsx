import Stack from '@mui/material/Stack';
function Statcards({
  title,
  value,
  growth
}) {
  return (
    <div className="bg-white rounded-2xl border p-6">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

      <p className="text-green-600 mt-2">
        {growth}
      </p>

    </div>
  );
}
export default Statcards;