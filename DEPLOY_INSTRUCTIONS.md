# How to Deploy Your Portfolio to Netlify

You have two easy ways to deploy your new "WOW" portfolio.

## Option 1: The Professional Way (Recommended - Automatic Updates)
This method connects your code to GitHub. When you update your code later, your site updates automatically.

### Step 1: Push your code to GitHub
1.  Initialize Git in your project folder (I will do this for you).
2.  Go to [GitHub.com/new](https://github.com/new) and create a new repository named `portfolio-website`.
3.  Copy the commands they give you under "...or push an existing repository from the command line". They look like this:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
    git branch -M main
    git push -u origin main
    ```
    *(Run these in your terminal)*

### Step 2: Connect to Netlify
1.  Log in to [Netlify.com](https://www.netlify.com/).
2.  Click **"Add new site"** > **"Import from an existing project"**.
3.  Select **GitHub**.
4.  Choose your `portfolio-website` repository.
5.  **Build Settings** should be automatically detected:
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
6.  Click **Deploy**.

---

## Option 2: The Fast Way (Drag & Drop)
This is the quickest way to get a live link right now.

1.  Make sure you have run `npm run build` (I just did this for you!).
2.  Locate the `dist` folder in your project directory:
    `c:\Users\ritik\OneDrive\Desktop\portfolio website\dist`
3.  Log in to [Netlify Drop](https://app.netlify.com/drop).
4.  Drag and drop the **entire `dist` folder** onto the page.
5.  Your site will be live instantly!

## Post-Deployment Checklist
- [ ] **Check SEO:** Go to Google Search Console and confirm your site can be crawled.
- [ ] **Custom Domain:** If you own `ritikyadav.com`, go to "Domain Settings" in Netlify to verify it.
