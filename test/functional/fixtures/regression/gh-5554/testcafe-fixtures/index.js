import { Selector } from 'testcafe';

fixture`unawaited`
    .page `http://example.com`;

test(`test 1`, async t => {
    const a = Selector('h1').innerText;

    // eslint-disable-next-line no-console
    console.log(a);

    await t.expect(a).eql('Example Domain');
});

test(`test 2`, async t => {
    const a = Selector('h1').innerText;

    // eslint-disable-next-line no-console
    console.log(`${a}`);

    await t.expect(a).eql('Example Domain');
});
