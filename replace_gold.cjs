const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === '.next') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/brand-gold-dark/g, 'brand-grey-dark')
                .replace(/brand-gold-light/g, 'brand-grey-light')
                .replace(/brand-gold/g, 'brand-grey-medium')
                .replace(/rgba\(212,\s*175,\s*55/g, 'rgba(138, 138, 138')
                .replace(/#D4AF37/gi, '#8A8A8A')
                .replace(/#F3E5AB/gi, '#E5E5E5')
                .replace(/#B8972E/gi, '#333333');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log('Updated', fullPath);
            }
        }
    }
}

processDir(path.join(__dirname, 'src'));

// Handle tailwind config specifically
const tailwindConfigPath = path.join(__dirname, 'tailwind.config.ts');
if (fs.existsSync(tailwindConfigPath)) {
    let content = fs.readFileSync(tailwindConfigPath, 'utf8');
    let newContent = content
        .replace(/brand-gold-dark/g, 'brand-grey-dark')
        .replace(/brand-gold-light/g, 'brand-grey-light')
        .replace(/brand-gold/g, 'brand-grey-medium')
        .replace(/rgba\(212,\s*175,\s*55/g, 'rgba(138, 138, 138')
        .replace(/#D4AF37/gi, '#8A8A8A')
        .replace(/#F3E5AB/gi, '#E5E5E5')
        .replace(/#B8972E/gi, '#333333');

    if (content !== newContent) {
        fs.writeFileSync(tailwindConfigPath, newContent, 'utf8');
        console.log('Updated', tailwindConfigPath);
    }
}
