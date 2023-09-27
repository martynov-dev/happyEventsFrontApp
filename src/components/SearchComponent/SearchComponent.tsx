import React, {useState, ChangeEvent, useEffect} from 'react';
import {ITag} from "../../models/ITag.ts";
import {useStore} from "../../store.ts";
import "./styles.less";
import TagsService from "../../services/TagsService.ts";

interface SearchComponentProps {
    onSearch: (selectedTags: ITag[]) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({onSearch}) => {
    const {tags, setTags} = useStore()

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
    const [showedTags, setShowedTags] = useState<ITag[]>([]);

    useEffect(() => {
        console.log("load tags");
        TagsService.getTags().then(response => {
            setTags(response.data);
        }).catch(e => {
            console.error(e);
        });
    }, []);

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
        const stringValue: string = e.target.value;
        setSearchQuery(stringValue);
        if (stringValue) {
            const selectedIds = selectedTags.map(el => el.id);
            setShowedTags(tags.filter(e => !selectedIds.includes(e.id) && e.name.toLowerCase().includes(stringValue.toLowerCase())));
        } else {
            setShowedTags([]);
        }
    }

    const onTagClick = (tag: ITag) => {
        setSearchQuery("");
        setSelectedTags([...selectedTags, tag])
        setShowedTags([]);
    }

    const removeTag = (tag: ITag) => {
        setSelectedTags([...selectedTags.filter(el => el.id !== tag.id)])
    }

    const reloadData = () => {
        onSearch(selectedTags);
    }

    return (
        <div>
            <div className="dropdown mb-1">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by tag..."
                        value={searchQuery}
                        onChange={handleChangeSearch}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary me-2" type="button" onClick={reloadData}>
                            Search
                        </button>
                    </div>
                </div>
                <div className={`dropdown-menu ${showedTags.length > 0 ? "show" : ""}`}>
                    {showedTags
                        .map((tag) => (
                            <button
                                key={tag.id}
                                className="dropdown-item"
                                type="button"
                                onClick={() => onTagClick(tag)}
                            >
                                {tag.name}
                            </button>
                        ))}
                </div>
            </div>
            <div className="d-flex flex-wrap tags-container mt-2">
                {selectedTags.map((tag) => (
                    <div key={"st-" + tag.id} className="tag p-2 me-1">
                        {tag.name}
                        <button className="remove-tag" onClick={() => removeTag(tag)}>&times;</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default SearchComponent;
