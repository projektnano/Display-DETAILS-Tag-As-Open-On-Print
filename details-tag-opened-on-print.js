window.addEventListener('beforeprint', function() {
document.querySelectorAll('details').forEach(detail => {
detail.open = true;
});
document.querySelectorAll('summary').forEach(summary => {
summary.style.display = 'none';
});
});
window.addEventListener('afterprint', function() {
document.querySelectorAll('details').forEach(detail => {
detail.open = false;
});
document.querySelectorAll('summary').forEach(summary => {
summary.style.display = '';
});
});
