export default function generateData(samples: number, bumps: number): number[] {
  const data = Array(samples).fill(0);

  // Apply bumps to the data to generate variations
  for (let i = 0; i < bumps; i++) {
    bump(data);
  }

  return data;
}

// Helper function to create bumps in the data
function bump(data: number[]) {
  const x = 1 / (0.1 + Math.random());
  const y = 2 * Math.random() - 0.5;
  const z = 10 / (0.1 + Math.random());

  for (let i = 0; i < data.length; i++) {
    const w = (i / data.length - y) * z;
    data[i] += x * Math.exp(-w * w);
  }
}
