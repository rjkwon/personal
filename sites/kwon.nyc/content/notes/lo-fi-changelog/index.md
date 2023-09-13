---
title: "Lo-fi changelog"
date: 2023-04-27T07:38:45-04:00
draft: false
tag: site, github
---

I made a [changelog](https://github.com/rjkwon/personal/blob/main/CHANGELOG.md). 

This was a fun little morning project for me. I've seen others do a thing where the changelog is simply a list of all commit messages in reverse chronological order, so I decided to try it. With any "small" coding project, I find that I generally grossly underestimate the time it will take to accomplish a seemingly simple thing, but I learn a lot and also have fun with all the side quests.

In this case, I did some googling and found some articles [this Free Code Camp article is the main one I used](https://www.freecodecamp.org/news/a-beginners-guide-to-git-what-is-a-changelog-and-how-to-generate-it/), and immediately found out I have been writing bad commit messages (apparently the best practice is to use the [imperative mood](https://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages), e.g. "add changelog", not the past tense, as I've been doing). Okay, noted!

Since my web skills are self taught, I am trying to be more intentional about identifying and developing good habits and hygiene with coding. (I feel like there is a parallel to surgery here, where even though the end result of a procedure by two different surgeons might look the same, the one who throws their stitches meticulously and ties their knots perfectly square has "better" technique—although that might be less important for, say, a trauma laparotomy for a patient who's exsanguinating versus an elective plastic surgical procedure. Context matters. I wonder if it's the same with coding.)

I also read a little bit about [pretty formats for commits](https://git-scm.com/docs/pretty-formats).

In the end, this is where I ended up code-wise:

{{< highlight go "linenos=table,hl_lines=8 15-17,linenostart=1" >}}
git log --pretty=format:"* %as %s" > CHANGELOG.md
{{< / highlight >}}

which generated this: https://github.com/rjkwon/personal/blob/main/CHANGELOG.md

I like this solution for now because it's lightweight but does the job.

I also learned how to use the `highlight` [shortcode](https://gohugo.io/content-management/syntax-highlighting/) for displaying that code using Hugo. Now I just need to figure out where `blob` came from... and look into further automating this (potentially with a cron job?)... and maybe making it a page on the website instead of just a `.md` file...

