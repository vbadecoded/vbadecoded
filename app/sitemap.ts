import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.vbadecoded.com',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/vba',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/vba/vba-editor-dark-mode',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba/encrypt-database',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba/force-reenable-shift-key-bypass',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba/find-encryption-password',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba/always-grab-latest-version',
            lastModified: new Date(),
        },
        {
            url: 'https://www.vbadecoded.com/ms-access-vba/user-themes',
            lastModified: new Date(),
        },
    ]
}