---
title: "2019-12-12-git-github"
date: 2025-07-10
tags:

---

import Link from 'next/link'
import Head from 'next/head'
import { SITE_TITLE, BLOG_TITLE } from '../../lib/constants'
import Layout from '../../components/layout'
import Image from 'next/image'
import { PrismCode } from '../../components/prism'

const code = `
brew update
brew upgrade
brew install git
brew install git-gui
`.trim();

const code2 = `brew install --cask github`.trim();

// const blogLoader = ({ src, width, quality }) => {
//     return `https://res.cloudinary.com/dkeghqshh/image/upload/v1612975704/jenntesolin.com/blog${src}?w=${width}&q=${quality || 75}`
// }

export default function InstallingGit() {
    const POST_TITLE = 'Installing Git and Github on your Mac';
    const POST_DESCRIPTION = 'This post describes how to install git and github on your mac installation.';
    return (
        <Layout>
            <Head>
                <title>{POST_TITLE} - {SITE_TITLE}</title>
                <meta name="description" content={POST_DESCRIPTION} />
            </Head>
            <section aria-labelledby="main-content">
                <h1 id="main-content">{POST_TITLE}</h1>
                <p>This post describes how to install git and github on your mac installation. There are two common ways to install. Both methods are described below. Please note the first way requires homebrew.</p>
                <h2>Installing with homebrew</h2>
                <p>To install GIT, just run the below commands and enter your information when requested. Brew update/upgrade is being run to show best practice. Files should always be updated before trying to run commands.</p>
                <PrismCode
                    code={code}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <p>Or if you use Github, you first install the github cask by running the below command into your terminal. Once installed, click &quot;Install command line tool&quot; from the menu.</p>
                <PrismCode
                    code={code2}
                    language="shell-session"
                    plugins={["line-numbers"]}
                />

                <h2>Installing with DMG files</h2>
                <p>Download the DMG file from the <a className="underline focus:ring-2" href="https://sourceforge.net/projects/git-osx-installer/" rel="nofollow noreferrer">Official Binary installer from Sourceforge</a>.</p>
                <p>Alternatively, if you use github, you can download the <a className="underline focus:ring-2" href="https://desktop.github.com/" rel="nofollow noreferrer">github desktop DMG</a> file, then install the git command line tools from the app itself.</p>
                <p>To install the git command line tools from within the GitHub application, click on the app name &quot;GitHub Desktop&quot;, then choose &quot;Install command line tool&quot;.</p>
                <Image
                    //loader={blogLoader}
                    src="/github-cmd-tools_lni0uq.png"
                    alt=""
                    width={700}
                    height={504}
                />
                
            </section>
        </Layout>
    )
}
