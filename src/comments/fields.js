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
    body: { component: 'input', 'data-cy': 'input-body', id: 'body', name: 'body', required: true, type: 'textarea' },
    id: { component: 'input', 'data-cy': 'input-id', id: 'id', name: 'id', type: 'hidden' },
    timestamp: { component: 'input', 'data-cy': 'input-timestamp', id: 'timestamp', name: 'timestamp', type: 'hidden' }
}

export { FIELDS }
