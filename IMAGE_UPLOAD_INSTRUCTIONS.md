# KMC School Images - Upload Instructions

Please upload the 5 images to the `/public/images/` directory with these exact filenames:

## Image Mapping:

1. **Image 1** (Sports court with basketball court and modern building)
   - Filename: `kmc-campus.jpg`
   - Used in: "Why KMC Public School" section (Welcome component)

2. **Image 2** (School gate with "KMC PUBLIC SCHOOL (CBSE)" sign)
   - Filename: `kmc-gate.jpg`
   - Used in: Hero carousel (1st slide)

3. **Image 3** (Two kindergarten kids with blue hands doing art)
   - Filename: `kmc-kindergarten.jpg`
   - Used in: Hero carousel (2nd slide)

4. **Image 4** (Students studying in classroom)
   - Filename: `kmc-classroom.jpg`
   - Used in: Hero carousel (3rd slide)

5. **Image 5** (Annual day cultural performance with blue lights)
   - Filename: `kmc-annual-day.jpg`
   - Used in: Hero carousel (4th slide)

## Upload Location:
```
/home/akshay/KMC/public/images/
```

## After Upload:
Run the following commands to build and deploy:
```bash
npm run build
git add .
git commit -m "Add KMC school photos"
git push
npx vercel --prod
```
