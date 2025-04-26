export const TEXT_FORMATTING_OPTION = [
    {
        id: 'bold',
        text: 'B',
    },
    {
        id: 'italic',
        text: 'I',
    },
    {
        id: 'underline',
        text: 'U',
    },
    {
        id: 'strikeThrough',
        text: 'S',
    },
    {
        id: 'subscript',
        text: `X₂`,
    },
    {
        id: 'superscript',
        text: `X²`,
    },
]

export const TEXT_ALLIGNMENT_OPTION = [
    {
        id: 'justifyLeft',
        text: `Left`,
    }, 
    {
        id: 'justifyCenter',
        text: `Center`,
    }, 
    {
        id: 'justifyRight',
        text: `Right`,
    }
] 

export const INSERT_OPTION = [
    {
        id: 'quote',
        text: `Quote`,
    },
    {
        id: 'code',
        text: `Code`,
    },
    {
        id: 'callout',
        text: `Callout`,
    }
] 

export const TEXT_STYLING_OPTION = [
    {
        id: 'insertUnorderedList',
        text: `• List`,
    },
    {
        id: 'insertOrderedList',
        text: `1. List`,
    },
]

export const FONT_FAMILY_OPTIONS = [
    {
        id: 'Arial',
        text: 'Arial'   
    },
    {
        id: 'Georgia',
        text: 'Georgia'   
    },
    {
        id: 'Times New Roman',
        text: 'Times New Roman'   
    },
    {
        id: 'Verdana',
        text: 'Verdana'   
    }
]

export const FONT_SIZE_OPTIONS = [
    {
        id: 1,
        text: '4px'  
    },
    {
        id: 2,
        text: '8px'   
    },
    {
        id: 3,
        text: '12px'   
    },
    {
        id: 4,
        text: '16px'  
    },
    {
        id: 5,
        text: '20px'  
    },
    {
        id: 6,
        text: '24px'  
    }
]

export const BLOCK_HTML = {
    quote: '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-2">Quote</blockquote>',
    code: '<pre class="bg-gray-100 p-2 rounded font-mono text-sm my-2">Code block</pre>',
    callout: '<div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded my-2">Callout content</div>',
  }