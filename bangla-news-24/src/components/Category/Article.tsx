import React from 'react';

interface Byline {
  name: string;
  role: string;
}

interface Topic {
  id: string;
  name: string;
}

interface BodyItem {
  type: 'text' | 'image';
  text?: string;
  url?: string;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

interface NewsArticleProps {
  article: {
    id: string;
    title: string;
    link: string;
    firstPublished: string;
    byline: Byline[];
    topics: Topic[];
    tags: string[];
    imageUrl: string;
    body: BodyItem[];
  };
}

export default function Article({ article }: NewsArticleProps) {
  if (!article) return null;

  // তারিখ ফরম্যাট করার ফাংশন
  const formatDate = (isoString: string) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const months = [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
    ];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 bg-white font-sans text-gray-900 leading-relaxed">
      {/* Topics / Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.topics?.map((topic) => (
          <span
            key={topic.id}
            className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-1 rounded"
          >
            {topic.name}
          </span>
        ))}
      </div>

      {/* Article Title */}
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4 text-gray-900 leading-snug">
        {article.title}
      </h1>

      {/* Byline & Published Date */}
      <div className="flex flex-wrap items-center justify-between border-y border-gray-200 py-3 mb-6 text-sm text-gray-600 gap-4">
        <div className="flex flex-wrap gap-4">
          {article.byline?.map((author, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-semibold text-gray-800">{author.name}</span>
              <span className="text-xs text-gray-500">{author.role}</span>
            </div>
          ))}
        </div>
        <div>
          <span>প্রকাশিত: {formatDate(article.firstPublished)}</span>
        </div>
      </div>

      {/* Featured Main Image */}
      {article.imageUrl && (
        <div className="mb-8">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-auto rounded-lg shadow-md object-cover max-h-[450px]"
          />
        </div>
      )}

      {/* Body Content (Text & Images loop) */}
      <div className="space-y-6 text-lg text-gray-800">
        {article.body?.map((item, index) => {
          if (item.type === 'text' && item.text) {
            return (
              <p key={index} className="whitespace-pre-line leading-relaxed">
                {item.text}
              </p>
            );
          } else if (item.type === 'image' && item.url) {
            return (
              <figure key={index} className="my-6">
                <img
                  src={item.url}
                  alt={item.altText || 'News image'}
                  className="w-full h-auto rounded-md shadow-sm object-cover"
                />
                {(item.caption || item.copyrightHolder) && (
                  <figcaption className="text-sm text-gray-500 mt-2 flex justify-between items-center border-l-2 border-red-600 pl-3">
                    <span>{item.caption}</span>
                    {item.copyrightHolder && (
                      <span className="text-xs italic text-gray-400">ছবি: {item.copyrightHolder}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>

      {/* Tags Section */}
      {article.tags && article.tags.length > 0 && (
        <div className="mt-10 pt-6 border-t border-gray-200 flex items-center flex-wrap gap-2">
          <span className="font-semibold text-sm text-gray-700">ট্যাগসমূহ:</span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}