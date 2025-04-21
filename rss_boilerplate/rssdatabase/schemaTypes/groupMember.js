export default {
    name: 'groupMember',
    title: 'Gruppemedlemmer',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Fullt navn',
        type: 'string',
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Profilbilde',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'bio',
        title: 'Biografi',
        type: 'text',
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'logs',
        title: 'Loggføringer',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'date',
                title: 'Dato',
                type: 'datetime',
              },
              {
                name: 'entry',
                title: 'Loggtekst',
                type: 'text',
              },
              {
                name: 'timeUsed',
                title: 'Tid brukt',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  }
  