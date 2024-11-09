function toggleBox(box) {
    const content = box.querySelector('.content');
    const isExpanded = content && content.style.display === 'block';

    // Close all other boxes
    document.querySelectorAll('.box .content').forEach(el => el.style.display = 'none');

    // Toggle the clicked box
    if (content) content.style.display = isExpanded ? 'none' : 'block';
}
