module.exports = {
    ok: (res, data, message = 'OK') => res.status(200).json({ status: 'success', message, data }),

    created: (res, data, message = 'Created') => res.status(201).json({ status: 'success', message, data }),

    fail: (res, code = 400, message = 'Bad Request', errors) =>
        res.status(code).json({ status: 'error', message, errors }),
};
