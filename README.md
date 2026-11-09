# Personal Portfolio Website

A responsive personal portfolio built with HTML5, CSS3 and vanilla JavaScript. It includes a hero section, about, skills, certificates, projects, contact form, mobile navigation and certificate preview.

## 1. Folder structure

```text
mustapha-portfolio/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    ├── files/
    │   └── (put your CV here as cv.pdf)
    └── images/
        ├── profile-placeholder.svg
        ├── certificate-1-placeholder.svg
        ├── certificate-2-placeholder.svg
        └── certificate-3-placeholder.svg
```

## 2. Run it on your laptop

1. Extract the ZIP file.
2. Open the folder in Visual Studio Code.
3. Install the **Live Server** extension in VS Code.
4. Right-click `index.html` and choose **Open with Live Server**.
5. Your browser will open the portfolio. You can also open `index.html` directly, but Live Server is more convenient while developing.

No Node.js, Python, Django or database is required for this static version.

## 3. Personalise the website

Before deployment, edit these items in `index.html`:

- Name, role and biography in the hero and About sections.
- GitHub, LinkedIn and Facebook profile URLs.
- Email address (`your-email@example.com`).
- WhatsApp URL: replace `2340000000000` with your number in international format, without `+` or spaces.
- Skills: remove skills you do not have and add the ones you can confidently demonstrate.
- Project names, descriptions, GitHub repository URLs and live demo URLs.
- Certificate titles.

### Add your profile picture

1. Put your photograph in `assets/images/`.
2. Name it `profile.jpg` (or another filename you choose).
3. In `index.html`, find `profile-placeholder.svg` and change it to `profile.jpg`.

Use a square, clear photograph for the best result.

### Add certificate images

Put your certificate images in `assets/images/`. Update each certificate card's `src` and `data-image` paths in `index.html` to match the image filename. Update the title too.

### Add your CV

Create `assets/files/` and put your CV inside it as `cv.pdf`. The download button already points to this location. If you use a different filename, update the link in `index.html`.

### Connect the contact form

This template uses FormSubmit, a third-party form relay:

1. In `index.html`, replace `your-email@example.com` in the form's `action` with the email address where you want to receive messages.
2. Replace the visible contact email too.
3. Deploy the site and submit a test message.
4. Open the activation email sent by FormSubmit and confirm the address.
5. Submit another test to verify delivery.

Do not put email passwords, API secrets or private credentials in frontend JavaScript. A static website cannot safely keep secrets.

## 4. Test before deployment

- Check the site on a phone and laptop.
- Open every navigation link.
- Test the CV download.
- Test the WhatsApp and social links.
- Open each certificate preview.
- Test the contact form after activating FormSubmit.
- Replace all sample `#` project links with real URLs.

## 5. Deploy free with GitHub Pages

1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new **public** repository. A convenient name is `yourusername.github.io` (replace `yourusername` with your GitHub username).
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish. Your site will be available at `https://yourusername.github.io/`.

If you use a repository with another name, the address will normally be `https://yourusername.github.io/repository-name/`.

## 6. Alternative deployment: Netlify

1. Visit https://www.netlify.com/ and sign in.
2. Choose **Add new site → Deploy manually**.
3. Drag the extracted `mustapha-portfolio` folder into the deployment area.
4. Netlify will publish it and provide a public URL.
5. You can configure a custom domain from the site's domain settings.

## 7. How the code works

- **HTML** gives each page section its structure and content.
- **CSS** controls the dark navy theme, cards, spacing, responsive layout and hover effects.
- **JavaScript** opens the mobile menu, highlights the active navigation item, displays certificate previews, updates the year and controls the back-to-top button.
- **Font Awesome** supplies the icons.
- **FormSubmit** forwards contact form submissions to your email after activation.
- **GitHub Pages / Netlify** hosts the static website.

## Important

This is a frontend portfolio template. The project cards are sample content, not proof that those projects are completed or deployed. Replace them with your actual work and links before presenting the site professionally.
