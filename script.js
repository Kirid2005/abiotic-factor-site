function switchLanguage(lang) {
    const elementsToTranslate = {
        'ru': {
            'nav-header': 'Навигация',
            'add-request': 'Добавить заявку',
            'my-requests': 'Мои заявки',
            'faq': 'Часто задаваемые вопросы',
            'request-list-header': 'Список заявок'
        },
        'en': {
            'nav-header': 'Navigation',
            'add-request': 'Add Request',
            'my-requests': 'My Requests',
            'faq': 'Frequently Asked Questions',
            'request-list-header': 'Request List'
        },
        'uk': {
            'nav-header': 'Навігація',
            'add-request': 'Додати заявку',
            'my-requests': 'Мої заявки',
            'faq': 'Часті питання',
            'request-list-header': 'Список заявок'
        }
    };
    const translations = elementsToTranslate[lang];
    for (const id in translations) {
        document.getElementById(id).textContent = translations[id];
    }
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
