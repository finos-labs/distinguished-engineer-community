# Contributing to the Distinguished Engineer Community (FINOS DE SIG)

We’re glad you’re here! This repository is a collaborative hub for **public, reusable resources** created by Distinguished Engineers and the broader community, all aligned to our mission of responsible, high‑impact technology.

> ✅ We welcome contributions from **anyone**: engineers, subject matter experts, professional/engineering practice groups, researchers, students, and more.

---

This document describes the contribution process and governance policies of the FINOS Distinguished Engineer Community SIG. The SIG is also governed by the [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), and the FINOS [IP Policy]( https://community.finos.org/governance-docs/IP-policy.pdf), [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct), [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/), and [Meeting Procedures](https://community.finos.org/docs/governance/meeting-procedures/).

## Contents

1. Scope: What You Can Contribute
2. Ways to Get Involved
3. Contribution Flow
4. Reviews, Approvals & Merging
5. Developer Certificate of Origin (DCO)
6. Style & Documentation Guidelines
7. Licensing & Attribution
8. Governance, Maintainers & Meetings
9. Code of Conduct
10. Getting Help

---

## Scope: What You Can Contribute

This is primarily a **documentation and resources** repository. Contributions are welcome across all working groups and cross‑cutting themes:

### Working Group Content

- **Outreach**: technology landscape review templates, strategic guidance frameworks, charity engagement playbooks, case studies from outreach engagements
- **Inclusive Engineering**: mentoring guides, program templates, inclusive practices, ethical nudge patterns, education and school outreach materials
- **DE Role Definition**: improvements to the standard definition, adoption guidance, competency framework examples

### Cross‑Cutting Content

- **Toolkit content**: playbooks, checklists, templates, frameworks
- **Guides and explainers**: architecture patterns, decision frameworks, AI usage guardrails
- **Education content**: talks, decks, webinars, school outreach materials
- **Thought leadership**: curated reading lists, synthesized insights
- **Research**: briefs, methods, collaboration proposals
- **Case studies / success stories** (anonymized and shareable)
- **Repo infrastructure**: organization, indexing, metadata, diagrams, accessibility

> If you want to contribute code (e.g., a website or tooling), please open an issue first so maintainers can align on scope and location.

---

## Ways to Get Involved

- **Open an Issue** to request a resource, propose a change, or discuss an idea
- **Comment on Issues/PRs** to share expertise or suggest improvements
- **Submit a PR** with content or fixes
- **Join a Working Group** — participate in the Outreach or Inclusive Engineering groups
- **Join discussions** on approach, structure, and roadmap
- **Propose a talk/webinar** or share slides for community reuse
- **Share a success story** (ensure it’s anonymized and publishable)

---

## Contribution Flow

We use an **issue‑first workflow** and standard GitHub PR reviews.

1. **Discuss first (recommended).**  
   - Search existing issues/PRs.  
   - If substantial, open an issue to outline intent and get feedback.
2. **Fork & branch.**  
   - Use a descriptive branch name, e.g., `feature/toolkit-mentoring-guide` or `docs/fix-typos`.
3. **Write changes.**  
   - Keep PRs focused and reasonably small.  
   - Include context in the PR description (what/why).
4. **Sign your commits.**  
   - Use DCO sign‑off (`git commit -s`). See below.
5. **Open a PR.**  
   - Reference the issue, add a brief summary and checklist.  
   - Mark PR as draft if still discussing.
6. **Incorporate feedback.**  
   - Respond constructively; we aim for lazy consensus.
7. **Approval & merge.**  
   - See Reviews, Approvals & Merging.

**Substantial changes** (e.g., new sections of the toolkit, novel frameworks) should include a short design note (RFC) in the PR description or as a new Markdown file (e.g., `governance/decisions/000X-title.md`) summarizing motivation, alternatives, and outcomes.

---

## Reviews, Approvals & Merging

- **Small changes** (typos, formatting, small fixes): require **≥1 maintainer** approval.
- **Substantial changes** (new guides, frameworks, templates): require **≥2 maintainer** approvals.
- We prefer **squash merges** to keep history clean.
- **Lazy consensus** applies: if no substantive objections are raised within a reasonable review window (typically 5–10 business days), maintainers may proceed with merge.

> Maintainers may request additional review for sensitive topics or broad structural changes.

---

## Developer Certificate of Origin (DCO)

**All commits must be signed** using the DCO. Add a `Signed-off-by` line in your commit message with your name and email:

```
Signed-off-by: Jane Doe <jane.doe@example.com>
```


Use the `-s` flag to sign automatically:

```bash
git commit -s -m "Add mentoring program checklist"
```

If you forgot to sign, you can amend:

```bash
git commit --amend -s
git push --force-with-lease
```

## Style & Documentation Guidelines

- **Markdown**: Use #-style headings; prefer short paragraphs and lists.
- **Tone**: Clear, neutral, inclusive, vendor‑ and org‑agnostic.
- **Accessibility**: Add alt text for images; prefer text-first content; ensure contrast in diagrams.
- **File & folder names**: lowercase with hyphens, e.g., mentoring/mentor-playbook.md.
- **Images/diagrams**: Put under ./assets/ or a relevant subfolder; use open or self-authored visuals.
- **Templates & checklists**: Place under toolkit/templates/ and reference from your guide.
- **Citations & external links**: Cite sources when summarizing external materials; ensure links are stable.
- **Attribution**: See Licensing & Attribution.

When in doubt, look at existing files for examples and consistency.

## Licensing & Attribution

This repository is licensed under CC BY 4.0. By contributing, you agree your contribution is provided under the same license.

- Include attribution when reusing third‑party materials and ensure they are compatible with CC BY 4.0.
- Avoid adding content you cannot legally share.
- If you contribute materials previously published elsewhere, confirm you (or your employer) have rights to relicense under CC BY 4.0.

```
SPDX-License-Identifier: CC-BY-4.0.
```

## Governance, Maintainers & Meetings

- **Maintainers are Distinguished Engineers (DEs)** from multiple organizations. They steward quality, review PRs, and curate the roadmap.
- The SIG uses **open governance**: public issues, PRs, and transparent decision records.
- Meetings (when held) are posted publicly with agendas and minutes in github issues.

## Code of Conduct

Participation is governed by the FINOS Community [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct) and [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/).
Be respectful, inclusive, and constructive. Harassment or inappropriate behavior is not tolerated.

## Getting Help

- Open an [Issue](https://github.com/finos-labs/distinguished-engineer-community/issues) for questions, requests, or proposals
- Comment on [PRs](https://github.com/finos-labs/distinguished-engineer-community/pulls) and [issues](https://github.com/finos-labs/distinguished-engineer-community/issues) to share expertise
- Use [Discussions](https://github.com/finos-labs/distinguished-engineer-community/discussions)

We appreciate your time and expertise—thank you for helping the community do more good, together.