async function main() {
  const result = await Promise.race([
    new Promise(resolve => {
      setTimeout(() => resolve('First Promise'), 10);
    }),
    new Promise(resolve => {
      setTimeout(() => resolve('Second Promise'), 5);
    }),
  ]);

  console.log(result);
}

main().catch(console.error);
