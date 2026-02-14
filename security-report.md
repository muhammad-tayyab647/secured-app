# Week 6 - Security Report

## 1. SQL Injection
- Vulnerable login route exploited with `admin' --` payload
- Fixed using prepared statements
- Verified using SQLMap → no injection possible

## 2. CSRF
- Vulnerable form tested via Burp Suite
- Fixed with `csurf` middleware and hidden token
- CSRF attack blocked (403 Forbidden)

## 3. Security Headers
- Helmet applied
- CSP, HSTS, X-Content-Type-Options verified
- CORS restricted to trusted origin

## 4. Penetration Testing
- ZAP Quick Scan → No high/medium risks
- Nikto scan → Secure headers, no directories exposed
- Lynis audit → OS & firewall properly configured

## 5. Deployment
- Dockerfile included for containerized deployment
- Dependencies audited with `npm audit fix`
- Automatic updates enabled for host OS

## Conclusion
- App now meets OWASP Top 10 security best practices
- Ready for secure deployment and presentation
