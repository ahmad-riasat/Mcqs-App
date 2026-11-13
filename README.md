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
|   Candidate: Ayesha Khan | Roll No: 451209 | Class 12 - Biology   |
|   Your Score: 15 / 17                                             |
|   [ Question-by-Question Review + Correct Answer + Explanation ]  |
|   [ Take Another Test ]                                           |
+-------------------------------------------------------------------+