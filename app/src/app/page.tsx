import styles from "./page.module.css";

const steps = [
  {
    id: 1,
    title: "Prototype",
    description: "Link the flow you want testers to explore.",
  },
  {
    id: 2,
    title: "Study setup",
    description: "Frame your objectives and session outline.",
  },
  {
    id: 3,
    title: "Audience",
    description: "Target the ideal participants for feedback.",
  },
  {
    id: 4,
    title: "Scheduling",
    description: "Define availability and moderation preferences.",
  },
  {
    id: 5,
    title: "Review",
    description: "Double-check all details before launch.",
  },
];

const currentStepIndex = 1;

const objectives = [
  "Validate the first-time activation flow",
  "Measure task success across primary onboarding goals",
  "Collect qualitative insights on tone and clarity",
];

const talkingPoints = [
  "Where do people hesitate before connecting their account?",
  "Is the value proposition obvious after the welcome screen?",
  "Which UI terms feel confusing or too technical?",
];

export default function Home() {
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <main className={styles.layout}>
      <div className={styles.topBar}>
        <div className={styles.brand}>
          <span className={styles.brandBadge}>VB</span>
          <span className={styles.brandCopy}>
            <span className={styles.brandTitle}>VibeBoard Labs</span>
            <span className={styles.brandSubtitle}>Study composer</span>
          </span>
        </div>
        <div className={styles.topActions}>
          <button type="button" className={styles.primaryButton}>
            Continue
          </button>
        </div>
      </div>

      <div className={styles.progress}>
        <span className={styles.progressLabel}>Step {currentStepIndex + 1} of {steps.length}</span>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${Math.min(progress, 100)}%` }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className={styles.workspace}>
        <aside className={styles.sidebar} aria-label="Study steps">
          <div>
            <h2 className={styles.sidebarTitle}>Configure study</h2>
            <p className={styles.stepDescription}>
              Follow the guided checklist to launch research in minutes.
            </p>
          </div>
          <div className={styles.stepList}>
            {steps.map((step, index) => {
              const isActive = index === currentStepIndex;
              const isCompleted = index < currentStepIndex;
              const classNames = [
                styles.step,
                isActive ? styles.stepActive : "",
                isCompleted ? styles.stepCompleted : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <div key={step.id} className={classNames}>
                  <span className={styles.stepIndicator}>
                    {isCompleted ? "✓" : step.id}
                  </span>
                  <span className={styles.stepDetails}>
                    <span className={styles.stepTitle}>{step.title}</span>
                    <span className={styles.stepDescription}>{step.description}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </aside>

        <section className={styles.content} aria-labelledby="study-setup-heading">
          <header className={styles.sectionHeader}>
            <div>
              <h1 id="study-setup-heading" className={styles.sectionTitle}>
                Set the intent for this study
              </h1>
              <p className={styles.sectionSubtitle}>
                Highlight what you expect to learn and how participants should experience your
                prototype.
              </p>
            </div>
          </header>

          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label htmlFor="study-name" className={styles.fieldLabel}>
                Study title
              </label>
              <input
                id="study-name"
                name="study-name"
                defaultValue="Activation Flow - First Impression"
                className={styles.input}
                placeholder="What should this study be called?"
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor="study-objective" className={styles.fieldLabel}>
                Primary objective
              </label>
              <textarea
                id="study-objective"
                name="study-objective"
                className={styles.textarea}
                defaultValue="Understand how new customers experience the activation checklist and spot opportunities to remove friction in the first session."
              />
            </div>

            <div className={styles.inlineFields}>
              <div className={styles.fieldGroup}>
                <label htmlFor="task-count" className={styles.fieldLabel}>
                  Number of tasks
                </label>
                <select id="task-count" name="task-count" className={styles.select} defaultValue="4">
                  <option value="3">3 tasks</option>
                  <option value="4">4 tasks</option>
                  <option value="5">5 tasks</option>
                  <option value="custom">Custom</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="session-length" className={styles.fieldLabel}>
                  Expected length
                </label>
                <select
                  id="session-length"
                  name="session-length"
                  className={styles.select}
                  defaultValue="20"
                >
                  <option value="15">15 minutes</option>
                  <option value="20">20 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                </select>
              </div>
            </div>

            <div className={styles.inlineFields}>
              <div className={styles.fieldGroup}>
                <label htmlFor="moderation" className={styles.fieldLabel}>
                  Moderation style
                </label>
                <select id="moderation" name="moderation" className={styles.select} defaultValue="ai">
                  <option value="ai">AI assisted</option>
                  <option value="live">Live moderated</option>
                  <option value="async">Unmoderated async</option>
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="reporting" className={styles.fieldLabel}>
                  Reporting focus
                </label>
                <select id="reporting" name="reporting" className={styles.select} defaultValue="insights">
                  <option value="insights">Insights &amp; highlights</option>
                  <option value="analytics">Task analytics</option>
                  <option value="raw">Raw transcript export</option>
                </select>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>Key learning goals</span>
              <div className={styles.tagInput}>
                {objectives.map((objective) => (
                  <span key={objective} className={styles.tagChip}>
                    {objective}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <span className={styles.fieldLabel}>Guided talking points</span>
              <div className={styles.formGrid}>
                {talkingPoints.map((point) => (
                  <div key={point} className={styles.tagInput}>
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.preview} aria-label="Participant preview">
          <div className={styles.previewHeader}>
            <span className={styles.previewLabel}>Participant view</span>
            <span className={styles.previewTitle}>“Activation flow first look”</span>
          </div>

          <div className={styles.previewCard}>
            <div className={styles.previewMeta}>
              <span>4 guided tasks • 20 min</span>
              <span>Moderated with AI follow-ups</span>
              <span>Focus: activation clarity &amp; confidence</span>
            </div>
            <button type="button" className={styles.previewAction}>
              Preview as tester
            </button>
          </div>

          <p className={styles.previewNote}>
            Invited participants will receive an interactive link with your prototype, scripted
            prompts, and automatic recording enabled. Switch to “Audience” to fine tune targeting.
          </p>
        </aside>
      </div>
    </main>
  );
}
