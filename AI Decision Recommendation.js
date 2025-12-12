const taskDifficulty = getContext('taskDifficulty');
const timeAvailable = getContext('timeAvailable');

const prompt = `You are an assistant helping with task planning. The task difficulty is '${taskDifficulty}' and the time available is ${timeAvailable} minutes. Should the user do the task now or postpone it? Give a short, clear recommendation for a beginner.`;

(async () => {
  try {
    const result = await TurboticOpenAI([
      { role: 'user', content: prompt }
    ]);
    const recommendation = result.content.trim();
    setContext('recommendation', recommendation);
    console.log('AI Recommendation:', recommendation);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();