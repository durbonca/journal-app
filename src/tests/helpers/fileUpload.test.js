import { fileUpload } from '../../helpers/fileUpload';

describe('fileUpload', () => {
    test('should upload a file and return Url', async () => {
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png')
        const blob = await resp.blob()
        const file = new File([blob], 'logo.jpg')
        const url = await fileUpload(file)
        
        expect(typeof url).toBe('string');
    })

    test('should return error', async () => {
        const file = new File([], 'logo.jpg')
        const url = await fileUpload( file )
        
        expect(url).toBe(null);
    })
});