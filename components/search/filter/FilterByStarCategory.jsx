'use client';

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FilterByStarCategory = () => {
    const [query, setQuery] = useState([]);
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const checked = event.target.checked;

        if (checked) {
            setQuery(prev => [...prev, name]);
        }
        else {
            const filtered = query.filter(item => item !== name);
            setQuery(filtered);
        }
    }

    useEffect(() => {
        const category = params.get('category');
        if (category) {
            const decodedCategory = decodeURI(category);
            const queryInCategory = decodedCategory.split('|');
            setQuery(queryInCategory);
        }
    }, [])
    useEffect(() => {
        if (query.length > 0) {
            params.set('category', encodeURI(query.join('|')));
        }
        else {
            params.delete('category');
        }
        replace(`${pathname}?${params.toString()}`)
    }, [query])

    return (
        <>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label for="fiveStar">
                    <input type="checkbox" name="5" id="fiveStar"
                        onChange={handleChange}
                        checked={query.includes('5')}
                    />5 Star
                </label>

                <label for="fourStar">
                    <input type="checkbox" name="4" id="fourStar"
                        onChange={handleChange}
                        checked={query.includes('4')}
                    />4 Star
                </label>

                <label for="threeStar">
                    <input type="checkbox" name="3" id="threeStar"
                        onChange={handleChange}
                        checked={query.includes('3')}
                    />3 Star
                </label>

                <label for="twoStar">
                    <input type="checkbox" name="2" id="twoStar"
                        onChange={handleChange}
                        checked={query.includes('2')}
                    />2 Star
                </label>

                <label for="oneStar">
                    <input type="checkbox" name="1" id="oneStar"
                        onChange={handleChange}
                        checked={query.includes('1')}
                    />1 Star
                </label>
            </form>
        </>
    );
};

export default FilterByStarCategory;