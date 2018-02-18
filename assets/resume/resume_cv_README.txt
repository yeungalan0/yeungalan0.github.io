# To install Xelatex and latex stuff
sudo dnf install texlive-collection-fontsrecommended texlive-xetex texlive-latex texlive-titlesec 'tex(datetime.sty)' 'tex(eu1enc.def)' 'tex(polyglossia.sty)' texlive-parskip-6:svn19963.2.0-36.fc27.5.noarch

# To compile resume
[ayeung@localhost resume]$ pwd
/home/ayeung/github/assets/resume
[ayeung@localhost resume]$ xelatex resume_cv.tex
