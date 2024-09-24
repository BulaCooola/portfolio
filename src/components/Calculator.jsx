// components/ProjectPage.jsx
import { useState } from "react";

// Calculate Fat weight
const fatWeight = (bodyWeight, bodyFat) => {
  return bodyWeight * (bodyFat / 100);
};

// Calculate Fat Free Weight
const fatFreeWeight = (bodyWeight, fatWeight) => {
  return bodyWeight - fatWeight;
};

// Calculate Lowest Allowable Weight
const lowestAllowableWeight = (fatFreeWeight) => {
  return fatFreeWeight / (1 - 0.05);
};

// Generate matrix of weights and body fat percentages
const generateMatrix = (weightRange, bfRange) => {
  let res = {};

  weightRange.forEach((weight) => {
    bfRange.forEach((bf) => {
      const fw = fatWeight(weight, bf);
      const ffw = fatFreeWeight(weight, fw);
      const law = lowestAllowableWeight(ffw);

      res[`${weight}lbs ${bf}%`] = parseFloat(law.toFixed(3));
    });
  });

  return res;
};

const ProjectPage = () => {
  const [desiredWeight, setDesiredWeight] = useState(0);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);
  const [minBF, setMinBF] = useState(0);
  const [maxBF, setMaxBF] = useState(0);
  const [result, setResult] = useState({});

  const weightClasses = [125, 133, 141, 149, 157, 165, 174, 184, 197, 285];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (minWeight > maxWeight || minBF > maxBF) {
      alert("Error: Min values cannot exceed max values.");
      return;
    }

    if (maxWeight - minWeight > 10) {
      alert("Boundary between max_weight and min_weight exceeds 10 lbs.");
      return;
    }

    if (maxBF - minBF > 5) {
      alert("Boundary between max_bf and min_bf exceeds 5%.");
      return;
    }

    const weightRange = Array.from(
      { length: Math.floor((maxWeight - minWeight) / 0.5 + 1) },
      (_, i) => minWeight + i * 0.5
    );
    const bfRange = Array.from(
      { length: Math.floor((maxBF - minBF) / 0.5 + 1) },
      (_, i) => minBF + i * 0.5
    );

    const res = generateMatrix(weightRange, bfRange);
    setResult(res);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Weight and Body Fat Calculator</h1>
      <p className="text-sm font-italic mb-4">
        Find the weight and body fat percentage where you certify. The weights labled in green means
        you certify at that body weight and fat percentage. If it's red, you do not certify.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Desired Weight (lbs): </label>
          <select
            value={desiredWeight}
            onChange={(e) => setDesiredWeight(parseFloat(e.target.value))}
            required
          >
            <option value="">Select a weight class</option>
            {weightClasses.map((weightClass) => (
              <option key={weightClass} value={weightClass}>
                {weightClass} lbs
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Min Weight (lbs): </label>
          <input
            type="number"
            value={minWeight}
            onChange={(e) => setMinWeight(parseFloat(e.target.value))}
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Max Weight (lbs): </label>
          <input
            type="number"
            value={maxWeight}
            onChange={(e) => setMaxWeight(parseFloat(e.target.value))}
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Lower Body Fat Boundary (%):{" "}
          </label>
          <input
            type="number"
            value={minBF}
            onChange={(e) => setMinBF(parseFloat(e.target.value))}
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upper Body Fat Boundary (%):{" "}
          </label>
          <input
            type="number"
            value={maxBF}
            onChange={(e) => setMaxBF(parseFloat(e.target.value))}
            step="0.1"
            required
          />
        </div>
        <button className="button custom-button-small" type="submit">
          Calculate
        </button>
      </form>

      <h2 className="mt-8 text-xl font-semibold">Results:</h2>
      <table className="mt-4 min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left border-b border-gray-300">Weight & Body Fat</th>
            <th className="p-2 text-left border-b border-gray-300">
              Lowest Allowable Weight (lbs)
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(result).map((key) => {
            const certificationStatus =
              result[key] <= desiredWeight ? "You Certify" : "You Don't Certify";
            return (
              <tr key={key} className="border-b border-gray-300">
                <td className="p-2">{key}</td>
                <td
                  className="p-2"
                  style={{
                    color: result[key] <= desiredWeight ? "green" : "red",
                  }}
                >
                  {result[key]}
                </td>
                <td className="p-2">{certificationStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectPage;
