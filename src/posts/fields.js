const FIELDS = {
    author: {
        component: 'input',
        'data-cy':
        'input-author',
        id: 'author',
        maxLength: 60,
        name: 'author',
        required: true,
        type: 'text'
    },
    body: { component: 'input', 'data-cy': 'input-body', id: 'body', name: 'body', required: true },
    category: { component: 'select', 'data-cy': 'input-category', id: 'category', name: 'category', required: true },
    id: { component: 'input', 'data-cy': 'input-id', id: 'id', name: 'id', type: 'hidden' },
    timestamp: { component: 'input', 'data-cy': 'input-timestamp', id: 'timestamp', name: 'timestamp', type: 'hidden' },
    title: {
        component: 'input',
        'data-cy': 'input-title',
        id: 'title',
        maxLength: 120,
        name: 'title',
        required: true,
        type: 'text'
    }
}

export { FIELDS }
