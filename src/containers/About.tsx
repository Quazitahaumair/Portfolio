'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const
  About = () => {
    const { title, img, list } = aboutSection;
    // To avoid hydration error
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);

    return domLoaded ? (
      <Wrapper id="about" {...getSectionAnimation}>
        <h2 className="heading-secondary">{title}</h2>
        <main className="flex flex-col items-center gap-1 lg:items-start lg:flex-row">
          <div className="space-y-4 lg:w-[70%]">
            <p>
              Hi, my name is Quazi Taha, a first-year MCA student at{' '}
              <Link
                href="https://bhu.ac.in/"
                target="_blank"
                className="text-accent"
              >
                Savitribai Phule Pune University
              </Link>
              .<br /> I'm an Artist as well as crazy full stack web developer who
              wants to explore every tech stack.
            </p>
            <p>
              My main focus these days is learning front-end development and finding
              a decent job.
            </p>

            {list && (
              <>
                <p>{list.title}</p>
                <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                  {list.items.map((item) => (
                    <ListItem key={getId()}>{item}</ListItem>
                  ))}
                </ul>
              </>
            )}
          </div>
          {/* <AuthorImage src={img} alt={author.name} /> */}
        </main>
      </Wrapper>
    ) : (
      <></>
    );
  };

export default About;
