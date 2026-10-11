---
title: Engineering a Timetable Scheduling Algorithm from Scratch
description: How I tackled the classic NP-Hard Class Scheduling Problem by rejecting ready-made algorithms and relying on human logic and architectural design.
createdAt: 2026-10-11T18:00:00
image: ./assets/astro-scholar-release.png

tags:
  - algorithm
  - python
  - problem-solving
  - software-engineering
authors:
  - vili
stage: evergreen
audience: Software engineers, technical recruiters, and developers interested in algorithmic problem-solving and system architecture.
---

In the realm of computer science, University Class Scheduling is a classic, notoriously complex problem (often classified as NP-Hard). When I recently decided to build a scheduling system from scratch, I knew there were hundreds of ready-made algorithms and research papers available to solve it.

But I made a strict rule for myself: **No searching for existing solutions.**

The goal wasn't just to write code or finish a project. I wanted to use this challenge as a mental gym—to test my ability to break down complex problems and build an algorithm from the ground up relying entirely on logical analysis.

Here is how the problem evolved from scribbles on paper to a robust, dynamic scheduling engine.

## The Beginning: Pen, Paper, and Human Modeling

Before opening a code editor, I defined the core entities (Halls, Subjects, Groups, Time Slots) and the hard constraints (no spatial or temporal collisions for instructors, halls, or student groups).

I stepped away from the screen, created a mockup dataset, drew a time-space matrix on paper, and started distributing the subjects manually. This simple step immediately revealed the system's hidden bottlenecks: human intuition easily recognized that Laboratories and Large Auditoriums are scarce resources. If I left them for last, I would inevitably hit a dead end.

## Rejecting Complexity: The "Multi-Pass" Phase Algorithm

When attempting to translate this human intuition into machine instructions, the traditional path would dictate building a complex Backtracking algorithm or assigning numeric "Priority Weights" to sort every subject.

I stopped and asked myself: **Why complicate things mathematically when I can simplify them structurally?**

Instead of weights and backtracking, I engineered a **Sequential Phase Distribution** approach:

1. **Phase 1:** Scan the dataset exclusively for "Core" subjects and map them to Large Halls during morning slots (by sorting time slots ascendingly and halls descendingly by size).
2. **Phase 2:** Scan again to strictly map "Practical" subjects to matching Laboratory halls.
3. **Phase 3 & 4:** Fill the remaining gaps with secondary and elective subjects in medium and small halls.

**The breakthrough of this decision:** This simple structural order automatically solved a highly complex "soft constraint" without writing any dedicated code. By forcing core subjects into early morning slots across the board, it became mathematically impossible to exhaust a single student group with three heavy core subjects in a single day!

## Performance Engineering: Constant Time Memory Guards

To prevent instantaneous collisions (e.g., booking the same instructor in two different halls simultaneously), I avoided slow list-searching operations ($O(n)$). Instead, I utilized `Sets` data structures to create localized "Memory Guards" for each time slot.

Any attempt by the algorithm to book a hall, instructor, or group that already existed in that specific time slot's `Set` was instantly rejected in constant time $O(1)$, granting the system blazing-fast execution speeds.

## Architectural Upgrade: Transitioning to OOP

After translating the logic into Python and running actual QA tests, I hit real-world deployment challenges:

* **Global State Leakage:** Variables were accumulating and corrupting data upon consecutive test runs.
* **The "All-or-Nothing" Flaw:** The initial algorithm would skip a subject entirely if even one of its target student groups was busy.

To solve this, I completely refactored the codebase into Object-Oriented `Classes`. This encapsulation guaranteed safe state resets. I also modified the search logic to extract "only available groups" and pack them into the hall. This simple tweak gave the system the dynamic ability to **merge or split student groups** automatically based entirely on the selected hall's capacity.

## Scaling for the Real World

To make the engine viable for real university environments, I implemented advanced real-world constraints:

* **Cumulative Tracking:** I introduced variables for weekly required units (`uperw`) and session duration (`unit`). The system evolved from a simple "one-time booking" tool into a comprehensive tracker that loops until every subject fulfills its exact weekly quota.
* **Burnout Constraints:** I added a hard daily limit on instructor lectures and strictly prevented any student group from taking the same subject twice in one day.

A major takeaway from this project is that software engineering isn't just about syntax or importing libraries. The real challenge lies in abstracting reality, mimicking human logic intelligently, rejecting unwarranted complexity, and building a solid architecture that solves the problem in the smartest, most efficient way possible.
