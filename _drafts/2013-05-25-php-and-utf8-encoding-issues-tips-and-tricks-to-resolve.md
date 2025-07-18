---
title: "2013-05-25-php-and-utf8-encoding-issues-tips-and-tricks-to-resolve"
date: 2025-07-10
tags:

---

import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import { PrismCode } from '../../components/prism'

const code = `
ini_set('default_charset', 'UTF-8');
header('content-type: text/html; charset: utf-8');
mb_language('uni');
mb_internal_encoding('UTF-8');
`.trim();

const code2 = `
//currently: PDO
$conn_info = 'mysql:host=localhost; dbname=test; charset=UTF8';
$dbh = new PDO($conn_info, $db_user, $db_password);

//Before 5.3.6: PDO
$db = new PDO($con, $db_user, $db_password);
$db->exec('set names utf8');

//not recommended!
if ($db = @mysql_connect($host, $username, $password)) {
		mysql_select_db($databasename, $db);
		mysql_set_charset("utf8");
		mysql_query('SET NAMES utf8');
        //code here
}
`.trim();
const code3 = `
<meta charset="UTF-8">
`.trim();

export default function PhpUtfEncode() {
    const POST_TITLE = 'PHP and UTF8 encoding issues - Tips and tricks to resolve';
    const POST_DESCRIPTION = 'Typically, having the proper character encoding on a page can be a bit of a pain, even if you have the right meta-tag. Here are some tips on how to ease the issue.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>Typically, having the proper character encoding on a page can be a bit of a pain, even if you have the right meta-tag. Here are some tips on how to ease the issue.</p>
                <ol className="list-decimal list-inside m-2">
                    <li>Add the following to the top of your php page:
                        <PrismCode
                            code={code}
                            language="php"
                            plugins={["line-numbers"]}
                        /></li>
                    <li>Be sure that your databases in tables in mysql have a utf-8 correlation. This can be changed in phpMyAdmin under the options tab.</li>
                    <li>Make sure your MySQL query declares UTF-8
                        <PrismCode
                            code={code2}
                            language="php"
                            plugins={["line-numbers"]}
                        /></li>
                    <li>Make sure the php file is in UTF-8, not ASCII: Text editors such as sublime, can convert the page to UTF-8 for you, as post editors (and IDE&apos;s) may actually use ASCII. To convert the file to UTF-8 in sublime Text, go to file &gt;  Save with encoding &gt; UTF-8. Its recommended that PDO databases access is used. Check out this Tuts+ Article: <a className="underline focus:ring-2" href="https://code.tutsplus.com/tutorials/why-you-should-be-using-phps-pdo-for-database-access--net-12059" rel="nofollow noreferrer">Why You Should Be Using PHP&apos;s PDO for Database Access</a> for more information</li>
                    <li>Be sure yor web view uses the UTF meta encoding tag as well:
                        <PrismCode
                            code={code3}
                            language="html"
                            plugins={["line-numbers"]}
                        /></li>
                    <li>Lastly, be sure to check your code editor&apos;s settings to make sure you are viewing it in UTF-8 encoding.</li>
                </ol>
            </section>
        </Layout>
    )
}
