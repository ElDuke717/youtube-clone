This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# This is the YouTube Clone Project

Hopefully this works!  

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## To Do
- Make sure connection with Amazon S3 is working
- Ensure that the user has an avatar image
- Hide the “Subscribe” button if the user is not logged in
- Style the app, colors, layout, UI so it suits your style or even just your favorite color scheme
- Add the ability to write comments, like we did in Reddit but only 1 level deep (can’t comment comments)
- Let logged in users upvote or downvote a video
- Implement an algorithm on the homepage
- Add a “played” flag when a logged in user views a video
- Allow to change the visibility of a video
Videos could be set in 3 ways: public, unlisted or private. If a video is public, it’s publicly visible in the homepage and in the user’s channel. If a video is unlisted, it can be seen if someone shares the URL, but it’s not shown in the homepage or into the user’s channel. If a video is private it’s only visible by the user that uploaded it.
- In the single video page show other videos from the author’s channel instead of printing the latest videos like it happens now
- List somewhere the channels you’re subscribed to
