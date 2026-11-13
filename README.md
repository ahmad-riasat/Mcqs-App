# EduPrep Portal — FBISE Section-A OMR Practice Simulator

A responsive, client-side web application built with **semantic HTML5, custom CSS3, and vanilla JavaScript** that simulates Federal Board of Intermediate and Secondary Education (FBISE) Section-A objective OMR exams for SSC and HSSC students (Classes 9–12).

---

## 1. Target User & Problem Statement

- **Target Users:** FBISE Matric (Classes 9–10) and Intermediate (Classes 11–12) students preparing for annual board examinations.
- **Problem:** In FBISE board exams, Section-A (Objective) uses strict Optical Mark Recognition (OMR) bubble sheets where answers cannot be erased once marked, and time is tightly capped (20 minutes for SSC, 25 minutes for HSSC). Existing online quizzes use standard radio buttons without time pressure or answer-locking, leaving students unprepared for real OMR exam conditions.
- **Solution:** EduPrep replicates the exact tabular FBISE OMR sheet layout with one-click bubble locking, a live countdown timer with auto-submission, candidate roll-number verification, and instant answer-key review with explanations.

---

## 2. Application Wireframe (3-Stage Single-Page Flow)

```text
+-------------------------------------------------------------------+
| [EP] EduPrep — Prepare before you appear in exam                  |
+-------------------------------------------------------------------+
| SCREEN 1: CLASS & SUBJECT SELECTION                               |
|   Practice Like It's Exam Day                                     |
|   [ Class 9 ]   [ Class 10 ]                                      |
|   [ Class 11 ]  [ Class 12 ]                                      |
|   --------------------------------------------------------------- |
|   Select Subject (Dynamically Rendered):                          |
|   [ Biology ]   [ Computer Science ]   [ Mathematics ]            |
+-------------------------------------------------------------------+
                                 |
                                 v
+-------------------------------------------------------------------+
| SCREEN 2: TIMED FBISE OMR OBJECTIVE SHEET                         |
|   Class 12 - Biology                    [ Time Remaining: 24:59 ] |
|   +-----------------------------+-------------------------------+ |
|   | Candidate Full Name *       | FBISE Roll Number (6 Digits)* | |
|   +-----------------------------+-------------------------------+ |
|   +----+-----------------------+-----+-----+-----+-----+--------+ |
|   | S# | Question              | (A) | (B) | (C) | (D) | A B C D| |
|   +----+-----------------------+-----+-----+-----+-----+--------+ |
|   | 1. | Cortisol is called:   | ... | ... | ... | ... | O O O O| |
|   +----+-----------------------+-----+-----+-----+-----+--------+ |
|                                         [ Submit Answer Sheet ]   |
+-------------------------------------------------------------------+
                                 |
                                 v
+-------------------------------------------------------------------+
| SCREEN 3: GRADED RESULT & EXPLANATION REVIEW                      |
|   Exam Completed!                                                 |
|   Candidate: Ahmad Riasat | Roll No: 123456 | Class 12 - Biology   |
|   Your Score: 15 / 17                                             |
|   [ Question-by-Question Review + Correct Answer + Explanation ]  |
|   [ Take Another Test ]                                           |
+-------------------------------------------------------------------+

## 3. Web Development Life Cycle (WDLC) Stages

1. **01 — Gathering Relevant Information:** Defined the target audience (FBISE SSC & HSSC students in Classes 9–12), identified the core exam-preparation problem, and analyzed authentic Federal Board Section-A OMR sheet rules (bubble locking and 20/25-minute time limits).
2. **02 — Planning – Sitemap & Wireframe:** Mapped out the 3-stage single-page flow (Selection Screen → Timed OMR Sheet → Graded Result Review) and drafted low-fidelity wireframes alongside the client-side file structure (`index.html`, `css/style.css`, `js/data.js`, `js/app.js`).
3. **03 — Design & Layout:** Built the visual interface using semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<table>`, `<footer>`), a compact 80%-scaled UI, CSS Grid/Flexbox layouts, and mobile/tablet breakpoints (`900px` and `600px`).
4. **04 — Content Creation:** Curated and digitized Section-A past-paper MCQs, answer keys, and explanations across Biology, Computer Science, and Mathematics into structured JavaScript objects (`js/data.js`), plus instructional UI copy.
5. **05 — Development:** Wrote the vanilla JavaScript DOM logic (`js/app.js`) for dynamic subject filtering, permanent OMR bubble locking, live countdown timing, candidate form validation, and automated grading.
6. **06 — Testing, Review & Launch:** Tested edge cases (empty/invalid manual form submissions, timer expiration auto-submit, double-click bubble prevention, and responsive viewports) before pushing to GitHub and deploying live on GitHub Pages.
7. **07 — Maintenance & Updation:** Planned iterative updates for future project stages (Assignments 2 & 3), including expanding the past-paper question bank, adding user authentication, and connecting a backend database for persistent student score tracking.