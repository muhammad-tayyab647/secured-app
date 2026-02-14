# Week 6 - Advanced Security & Deployment

## Project Overview
This project demonstrates a secured Node.js application, hardened against common vulnerabilities like SQL Injection and CSRF. It includes advanced security audits and follows deployment best practices.

## Features Implemented
- SQL Injection protection (prepared statements)
- CSRF protection using `csurf` middleware
- Security headers via Helmet (CSP, HSTS, etc.)
- CORS restricted to trusted origin
- SQLite database with sample users
- Docker support for containerized deployment

## Security Audits
- OWASP ZAP scan → `Week6_ZAP_Report.html`
- Nikto scan → `Week6_Nikto_Report.txt`
- Lynis system audit → `Week6_Lynis_Report.txt`

## How to Run
### Locally
```bash
npm install
node app.js
